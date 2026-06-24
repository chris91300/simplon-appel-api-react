import { usePathname } from 'next/navigation'


export default function useIndex(){
    const pathName = usePathname();
    const index = pathName.split("/").pop(); 
    return parseInt(index!);
}