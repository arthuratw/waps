import {
    ReactNode,
    useEffect,
    useState,
    createContext,
} from 'react'
import { auth, db } from '../services/firebase'
import {
    Auth,
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { collection, addDoc, setDoc, doc, getDoc, where, query, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";


interface contextProvider {
    children?: ReactNode
}

interface UserTypes {
    uid?: string
    email: string | null
}

interface sectorType{
    sectorName: string
    userRef: DocumentData
}

interface contextData {
    loadingAuth:boolean
    signed: boolean
    authenticated: boolean
    auth: Auth
    user: User | null
    singUp: (name: string, email: string, password: string) => Promise<void>
    singIn: (email: string, password: string) => Promise<void>
    singOut: (auth: Auth) => void
    createEmployeer: (name: string, cpf: string, occupation:string, sector:string) => void
    createSector: (name:string) => void
}





export const AuthContext = createContext<contextData>({} as contextData)

export const AuthProvider = ({ children }: contextProvider) => {

    const [user, setUser] = useState<User | null>(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [sectorsNames, setSectorsNames] = useState([])

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem('waps');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }

        loadStorage();


    }, [])


    async function singUp(name: string, email: string, password: string) {
        setLoadingAuth(true)

        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                await addDoc(collection(db, "users"), {
                    name,
                    email: user.email,
                    password,

                }).then(() => {
                    let data = {
                        uid: user.uid,
                        name,
                        email: user.email,
                    }
                    setUser(user);
                    setAuthenticated(true)
                    storageUser(data)
                    setLoadingAuth(false)

                })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
    }

    async function singIn(email: string, password: string) {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setAuthenticated(true)
                const user = userCredential.user;

                let data = {
                    uid: user.uid,
                    email: user.email,

                }
                
                setUser(user);
                storageUser(data)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    function singOut() {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser(null)
                setAuthenticated(false)
                localStorage.clear()
            }).catch((error) => {
                // An error happened.
            });
    }

    async function createEmployeer(name: string, cpf: string, occupation:string, sector:string){
        const userRef = doc(db, "users", `${user?.uid}`)
        const sectorRef = doc(db, "sector", `${sector}`)
        await addDoc(collection(db, "employeers"),{
            name,
            cpf,
            occupation,
            userRef,
            sectorRef: sectorRef.id
        })
    }

    async function createSector(name:string){
        const userRef = doc(db, "users", `${user?.uid}`)
        await addDoc(collection(db, 'sector'),{
            sectorName: name,
            userRef
        })
    }

    function storageUser(data: UserTypes) {
        localStorage.setItem('waps', JSON.stringify(data));
    }

    return (
        <AuthContext.Provider value={{signed: !!user, singUp, singIn, singOut, user, auth, authenticated, loadingAuth, createEmployeer, createSector}}>
            {
                children
            }
        </AuthContext.Provider>
    )
}


