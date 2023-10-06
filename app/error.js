'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
 
export default function Error({ error, reset }) {
    const router = useRouter();
    const redirectToHome = () => {
        router.push("/");
      };
  useEffect(() => {
    const timer = setTimeout(redirectToHome, 5000);

    return () => clearTimeout(timer);
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => redirectToHome()
        }
      >
        Try again
      </button>
    </div>
  )
}