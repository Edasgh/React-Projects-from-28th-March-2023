import React from 'react'
import { atlassianLogo,
  googleLogo,
  dropboxLogo,
  shopifyLogo,
  slackLogo} from "./imports"

import "./brand.css"


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
      <img src={googleLogo} alt="google" />
      </div>
      <div>
      <img src={slackLogo} alt="slack" />
      </div>
      <div>
      <img src={atlassianLogo} alt="atlassian" />
      </div>
      <div>
      <img src={dropboxLogo} alt="dropbox" />
      </div>
      <div>
      <img src={shopifyLogo} alt="shopify" />
      </div>
    
    </div>
  )
}

export default Brand