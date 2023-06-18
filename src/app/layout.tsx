import '@/styles/globals.css';
import { Inter } from "next/font/google";

import { cn } from '@/lib/utils';

export const metadata = {
  title: 'ThreadIt',
  description: "Discover TreadIt, a fresh platform for insightful conversations and rich communities. Explore diverse topics, share your perspectives, and connect with enthusiastic individuals just like you. TreadIt is designed to foster engaging dialogues and cultivate knowledge sharing. Whether it's the latest trends, niche hobbies, global news, or quirky memes - find it all and much more on TreadIt. Dive deeper into discussions, upvote your favorites, and become a part of the story with TreadIt. Step into a world where your thoughts shape the conversation.",
  keywords: [
    "TreadIt",
    "social platform",
    "online discussions",
    "community",
    "trending topics",
    "global news",
    "hobbies",
    "knowledge sharing",
    "memes"
  ],
  authors: [{ name: 'Abdul Ahad Siddiqui', url: 'https://abdulahadsiddiqui.com' }],
  creator: 'Abdul Ahad Siddiqui',
  openGraph: {
    title: 'ThreadIt',
    description: "Discover TreadIt, a fresh platform for insightful conversations and rich communities. Explore diverse topics, share your perspectives, and connect with enthusiastic individuals just like you. TreadIt is designed to foster engaging dialogues and cultivate knowledge sharing. Whether it\'s the latest trends, niche hobbies, global news, or quirky memes - find it all and much more on TreadIt. Dive deeper into discussions, upvote your favorites, and become a part of the story with TreadIt. Step into a world where your thoughts shape the conversation.",
    url: 'https://threadit.abdulahadsiddiqui.com',
    siteName: 'ThreadIt',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: 'black',
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn('bg-white text-slate-900 antialiased light', inter.className)}>
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        {children}
      </body>
    </html>
  )
}
