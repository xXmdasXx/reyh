import React from 'react'
import TextLink from '../../../global/atoms/Link/TextLink'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

interface DontHaveAccLoginProps {
  href: string;
  text?: string;
  linkText?: string;
  className?: string;
}

function DontHaveAccLogin({
  href,
  text = "هیچ اکانتی ندارید؟",
  linkText = "ثبت نام",
  className = ""
}: DontHaveAccLoginProps) {
  return (
    <div className={className}>
      <div className='flex flex-row  gap-2 justify-center pl-5'>
        <TypographyAtom
          sx={{
            fontSize: '14px'
          }}
          color='text.secondary'
        >
          {text}
        </TypographyAtom>
        
        <TextLink
          href={href}
          color="text.main"
          onClick={() => {}}
          className=""
          sx={{}}
        >
          {linkText}
        </TextLink>
      </div>
    </div>
  )
}

export default DontHaveAccLogin