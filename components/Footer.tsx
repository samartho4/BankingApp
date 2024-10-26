// This file creates a footer for a website. The footer shows information about the user who's logged in, 
// like their name and email. It also has a logout button. The footer can look different on phones and computers. 
// When someone clicks the logout button, it logs them out and takes them back to the login page. 
// \The footer is smart - it knows who's using the website and shows their details. 
// It's like a small personal space at the bottom of each page that reminds you who you are and gives you a quick way to leave if you want to. 
// The code uses special tools to make this footer work smoothly on the website, 
// making sure it looks good and does its job properly no matter what device you're using.
import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if(loggedOut) router.push('/sign-in')
  }

  return (
    <footer className="footer">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName[0]}
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
          <h1 className="text-14 truncate text-gray-700 font-semibold">
            {user?.firstName}
          </h1>
          <p className="text-14 truncate font-normal text-gray-600">
            {user?.email}
          </p>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  )
}

export default Footer