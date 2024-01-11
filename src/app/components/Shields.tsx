import React from 'react'
import Shield from './Shield'
import './Shields.scss'
import './Section.scss'

const Shields = () => {
  return (
    <div className="shields">
      <div className="section-title">
        SHIELDS
        <hr className="section-hr"/>
      </div>
      <div className="shields-container">
        <Shield image="shield1.png" bgcolor='first' name='INFERNO' desc='The Inferno Shield, engulfed in flames, safeguards the Ordo Knights from fire-based threats, granting them unwavering protection in the heat of battle.'/>
        <Shield image="shield2.png" bgcolor='second ' name='GLACIER' desc='The Glacier Shield, icy and chilling, creates a frosty fortress, keeping cold-hearted foes at bay and preserving the Circle of Ordo Knights.'/>
        <Shield image="shield3.png" bgcolor='third' name='KRAKEN' desc='The Kraken Shield, with tentacle patterns, controls water, defending the Ordo Knights against aquatic dangers, ensuring their circle remains secure.' />
        <Shield image="shield4.png" bgcolor='fourth' name='TERRA' desc='The Terra Shield, adorned with earth symbols, molds the battlefield, shielding the Ordo Knights behind formidable barriers of rock and nature.'/>
        <Shield image="shield5.png" bgcolor='fifth' name='STORM' desc='The Storm Shield, charged with lightning and wind, repels adversaries with fierce elemental power, ensuring the Ordo Knights stand strong within their circle.'/>
      </div>
    </div>
  )
}

export default Shields