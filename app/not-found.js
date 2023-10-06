'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter();

  // Function to redirect to the home page
  const redirectToHome = () => {
    router.push("/");
  };

  useEffect(() => {
    // Automatically redirect to the home page after 5 seconds
    const timer = setTimeout(redirectToHome, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-4">
        It seems like the page you are looking for either does not exist or is coming soon.
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
        onClick={redirectToHome}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
