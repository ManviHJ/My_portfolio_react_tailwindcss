

import { ArrowUp } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap items-center'>
        <p className='text-sm text-muted-foreground flex-1 text-center'> 
            {" "} &copy;{new Date().getFullYear()} Manvi H J | All rights reserved. 
            </p>

            <a href='#hero' className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shrink-0 inline-flex items-center justify-center'>
                <ArrowUp size={20}/>
            </a>
    </footer>
  )
}

export default Footer