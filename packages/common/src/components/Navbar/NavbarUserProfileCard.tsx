import React, { useRef } from 'react'
import useOutsideAlerter from '../../hooks/useOutsideTouch'
import { IUserProfileList } from '../../interfaces/INavbar'
import AnimateIn from '../animations/AnimateIn'
import Button from '../Button/Button'
import { ButtonWrapper } from '../Button/ButtonElements'
import { NavbarUserProfileCardWrapper } from './NavbarElements'

const NavbarUserProfileCard: React.FC<IUserProfileList> = ({
  setState,
  profileList,
}) => {
  const userProfileCardRef = useRef()
  useOutsideAlerter(userProfileCardRef, setState)

  return (
    <AnimateIn duration={500} delay={250}>
      <NavbarUserProfileCardWrapper ref={userProfileCardRef.current}>
        {profileList?.map((e: any, index) => {
          return (
            <ButtonWrapper onClick={e?.onClick} key={index}>
              <Button value={e?.name} sm={true} />
            </ButtonWrapper>
          )
        })}
      </NavbarUserProfileCardWrapper>
    </AnimateIn>
  )
}

export default NavbarUserProfileCard
