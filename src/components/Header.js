import React, { useState } from 'react';
import {
  Box,
  Button,
  Icon,
  HStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { FaEnvelope, FaFacebookSquare, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 908) {
      setdropdown(false);
    } else {
      setdropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 908) {
      setdropdown(false);
    } else {
      setdropdown(false);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <span>BAA RUU WAA </span>
          <span> ARTISTRY</span>
        </Link>
      </div>
      <label for="menu" id="nav-icon">
        <div onClick={handleClick}>
          <i
            className={
              click ? 'fas fa-times hamburger' : 'fas fa-bars hamburger'
            }
          ></i>
        </div>
      </label>
      <input type="checkbox" id="menu" />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ul className={click ? 'menuLinks active' : 'menuLinks'}>
          <Link to="/about" onClick={closeMobileMenu} className="nav-Links">
            <li>About</li>
          </Link>
          <Link
            to="#"
            onClick={() => {
              closeMobileMenu();
              setIsOpen(true);
            }}
            className="nav-Links"
          >
            <li>Contact</li>
          </Link>
          {/* <Link to="/" onClick={closeMobileMenu} className="nav-Links">
            <li>Recent Work</li>
          </Link>
          <Link to="#" className="nav-Links">
            <li>
              Exhibitions <i className="fas fa-caret-down"></i>
              <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
              >
                <li>
                  <Link
                    to="/archive"
                    onClick={() => setClick(false)}
                    className=" dropdown-link"
                  >
                    ARTIST'S PUBLIC PROJECT
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => setClick(false)}
                    className="dropdown-link"
                  >
                    ARTIST'S PAST WORKS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => setClick(false)}
                    className="dropdown-link"
                  >
                    ARTIST'S WORK IN PROGRESS
                  </Link>
                </li>
              </ul>
            </li>
          </Link> */}
          <Link to="/archive" onClick={closeMobileMenu} className="nav-Links">
            <button className="liButton">
              <Link to="/archive">Gallery</Link>
            </button>
          </Link>
        </ul>
        <button className="mainButton">
          <Link to="archive">Gallery</Link>
        </button>
      </div>
      <AlertDialog
        size="xs"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay isCentered>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              contact the artist
            </AlertDialogHeader>

            <AlertDialogBody>
              <HStack>
                <a href="mailto:akinbaruwa@gmail.com">
                  <Icon h="25px" w="25px" as={FaEnvelope} />
                </a>
                <a href="https://m.me/akinjide.baruwa.16" target="_blank">
                  <Icon h="25px" w="25px" as={FaFacebookSquare} />
                </a>
                <a href="tel:+2347038898581">
                  <Icon h="23px" w="23px" as={FaPhoneAlt} />
                </a>
              </HStack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </header>
  );
}

export default Header;
