import React from 'react';
import { FaTwitter} from 'react-icons/fa';
import { PiBellLight, PiBookmarkSimpleFill,PiBookmarkSimpleLight } from 'react-icons/pi';
import { RiFileListLine } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { CiCircleMore } from 'react-icons/ci';
import { HiOutlineHome, HiOutlineSearch } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';
import { VscVerified } from 'react-icons/vsc';



export default function(props){
    
    if(props.icon == "HiOutlineHome"){
      return <> <li> <a href='#'><HiOutlineHome style={props.style}/> <h2>{props.title}</h2></a>  </li> </>
    } else if(props.icon == "HiOutlineSearch"){
        return <> <li> <a href='#'><HiOutlineSearch style={props.style}/> <h2>{props.title}</h2></a>  </li> </>
    } else if(props.icon == "PiBellLight"){
        return <> <li> <a href='#'><PiBellLight style={props.style}/> <h2>{props.title}</h2></a>  </li> </>
    } else if(props.icon == "MdOutlineEmail"){
        return <> <li> <a href='#'><MdOutlineEmail style={props.style}/> <h2>{props.title}</h2></a> </li> </>
    } else if(props.icon == "RiFileListLine"){
        return <> <li> <a href='#'><RiFileListLine style={props.style}/> <h2>{props.title}</h2></a>  </li> </>
    } else if(props.icon == "PiBookmarkSimpleLight"){
        return <> <li> <a href='#'><PiBookmarkSimpleLight style={props.style}/> <h2>{props.title}</h2></a>  </li> </>
    } else if(props.icon == "VscVerified"){
        return <> <li> <a href='#'><VscVerified style={props.style}/> <h2>{props.title}</h2></a>  </li> </>
    } else if(props.icon == "FiUser"){
        return <> <li> <a href='#'><FiUser style={props.style}/> <h2>{props.title}</h2></a>  </li> </>
    } else if(props.icon == "CiCircleMore"){
        return <> <li> <a href='#'><CiCircleMore style={props.style}/> <h2>{props.title}</h2></a>  </li> </>
    }
}   
