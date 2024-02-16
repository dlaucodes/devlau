import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href='/'>
       <Image 
       src="/assets/icons/android-chrome-192x192/png"
       width={192}
       height={192}
       alt=""
        />
    </Link>
  )
}

export default Logo