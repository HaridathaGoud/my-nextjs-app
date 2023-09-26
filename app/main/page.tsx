
'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const MainCompo=()=>{
const para = useRouter();

    return <><h2>Wellcome</h2>
    <button  onClick={()=>para.push('/contact')}>ContactPage</button><br/>
   Using Link Tag : <Link href={"/main/dashboard"}>goto dashboard</Link><br/>
   USing Button :  <button onClick={()=>para.push("/main/dashboard")}>goto dashboard</button><br/>
<Link href={'/stdtable'}>StdTable</Link> </>
}
export default MainCompo;
