import React from "react";
import {Dropdown} from "semantic-ui-react";

let descriptors = {
  'Vinyl': {
    Size: ['LP', '16"', '12"', '11"', '10"', '9"', '8"', '7"', '6.5"', '6"', '5.5"', '5"', '4"', '3.5"', '3"', '2"'],
    Speed: ['8 ⅓ RPM', '16 ⅔ RPM', '33 ⅓ RPM', '45 RPM', '78 RPM', '80 RPM'],
    Shape: ['Shape'],
    Sides: ['Single Sided'],
    Description: ['Advance', 'Album', 'mini-Album', 'EP', 'Maxi-Single', 'Single', 'Compilation', 'Card Backed', 'Club Edition', 'Deluxe Edition', 'Enhanced', 'Etched', 'Jukebox', 'Limited Editioin', 'Mispress', 'Misprint', 'Mixed', 'Mixtape', 'Numbered', 'Partially Mixed', 'Partially Unofficial', 'Picture Disk', 'Promo', 'Reissue', 'Remastered', 'Repress', 'Sampler', 'Special Edition', 'Styrene', 'Test Pressing', 'Transcription', 'Unofficial Release', 'White Label'],
    Channels: ['Stereo', 'Mono', 'Quadraphonic', 'Ambisonic']
  },
  'Acetate': {
    Size: ['LP', '16"', '12"', '11"', '10"', '9"', '8"', '7"', '6.5"', '6"', '5.5"', '5"', '4"', '3.5"', '3"', '2"'],
    Speed: ['8 ⅓ RPM', '16 ⅔ RPM', '33 ⅓ RPM', '45 RPM', '78 RPM', '80 RPM'],
    Shape: ['Shape'],
    Sides: ['Single Sided'],
    Description: ['Advance', 'Album', 'mini-Album', 'EP', 'Maxi-Single', 'Single', 'Compilation', 'Card Backed', 'Club Edition', 'Deluxe Edition', 'Enhanced', 'Etched', 'Jukebox', 'Limited Editioin', 'Mispress', 'Misprint', 'Mixed', 'Mixtape', 'Numbered', 'Partially Mixed', 'Partially Unofficial', 'Picture Disk', 'Promo', 'Reissue', 'Remastered', 'Repress', 'Sampler', 'Special Edition', 'Styrene', 'Test Pressing', 'Transcription', 'Unofficial Release', 'White Label'],
    Channels: ['Stereo', 'Mono', 'Quadraphonic', 'Ambisonic']
  },
  'Flexi-disc': {
    Size: ['LP', '16"', '12"', '11"', '10"', '9"', '8"', '7"', '6.5"', '6"', '5.5"', '5"', '4"', '3.5"', '3"', '2"'],
    Speed: ['8 ⅓ RPM', '16 ⅔ RPM', '33 ⅓ RPM', '45 RPM', '78 RPM', '80 RPM'],
    Shape: ['Shape'],
    Sides: ['Single Sided'],
    Description: ['Advance', 'Album', 'mini-Album', 'EP', 'Maxi-Single', 'Single', 'Compilation', 'Card Backed', 'Club Edition', 'Deluxe Edition', 'Enhanced', 'Etched', 'Jukebox', 'Limited Editioin', 'Mispress', 'Misprint', 'Mixed', 'Mixtape', 'Numbered', 'Partially Mixed', 'Partially Unofficial', 'Picture Disk', 'Promo', 'Reissue', 'Remastered', 'Repress', 'Sampler', 'Special Edition', 'Styrene', 'Test Pressing', 'Transcription', 'Unofficial Release', 'White Label'],
    Channels: ['Stereo', 'Mono', 'Quadraphonic', 'Ambisonic']
  },
  'CD': {
    Size: ['Mini', 'Minimax'],
    Shape: ['Business Card', 'Shape'],
    'CD Type': ['CD-ROM', 'CDi', 'CD+G', 'HDCD', 'VCD', 'AVCD', 'SVCD'],
    Description: ['Advance', 'Album', 'mini-Album', 'EP', 'Maxi-Single', 'Single', 'Compilation', 'Card Backed', 'Club Edition', 'Deluxe Edition', 'Enhanced', 'Etched', 'Jukebox', 'Limited Editioin', 'Mispress', 'Misprint', 'Mixed', 'Mixtape', 'Numbered', 'Partially Mixed', 'Partially Unofficial', 'Picture Disk', 'Promo', 'Reissue', 'Remastered', 'Repress', 'Sampler', 'Special Edition', 'Styrene', 'Test Pressing', 'Transcription', 'Unofficial Release', 'White Label'],
    Channels: ['Stereo', 'Mono', 'Quadraphonic', 'Ambisonic'],
    'Analog TV Standard': ['NTSC', 'PAL', 'SECAM']
  },
  'DVD': {
    Size: ['Mini', 'Minimax'],
    'DVD Type': ['DVD-Audio', 'DVD-Data', 'DVD-Video', 'Multichannel', 'NTSC', 'PAL', 'SECAM'],
    Sides: ['Double Sided'],
    Description: ['Advance', 'Album', 'mini-Album', 'EP', 'Maxi-Single', 'Single', 'Compilation', 'Card Backed', 'Club Edition', 'Deluxe Edition', 'Enhanced', 'Etched', 'Jukebox', 'Limited Editioin', 'Mispress', 'Misprint', 'Mixed', 'Mixtape', 'Numbered', 'Partially Mixed', 'Partially Unofficial', 'Picture Disk', 'Promo', 'Reissue', 'Remastered', 'Repress', 'Sampler', 'Special Edition', 'Styrene', 'Test Pressing', 'Transcription', 'Unofficial Release', 'White Label'],
    Channels: ['Stereo', 'Mono', 'Quadraphonic', 'Ambisonic'],
  },
  'SACD': {
    Channels: ['Hybrid', 'Multichannel', 'Stereo', 'Mono', 'Quadraphonic', 'Ambisonic'],
    Description: ['Advance', 'Album', 'mini-Album', 'EP', 'Maxi-Single', 'Single', 'Compilation', 'Card Backed', 'Club Edition', 'Deluxe Edition', 'Enhanced', 'Etched', 'Jukebox', 'Limited Editioin', 'Mispress', 'Misprint', 'Mixed', 'Mixtape', 'Numbered', 'Partially Mixed', 'Partially Unofficial', 'Picture Disk', 'Promo', 'Reissue', 'Remastered', 'Repress', 'Sampler', 'Special Edition', 'Styrene', 'Test Pressing', 'Transcription', 'Unofficial Release', 'White Label'],
  },
  'Blu-ray': {
    'Blu-ray Type': ['Blu-ray Audio'],
    Channels: ['Hybrid', 'Multichannel', 'Stereo', 'Mono', 'Quadraphonic', 'Ambisonic'],
    Description: ['Advance', 'Album', 'mini-Album', 'EP', 'Maxi-Single', 'Single', 'Compilation', 'Card Backed', 'Club Edition', 'Deluxe Edition', 'Enhanced', 'Etched', 'Jukebox', 'Limited Editioin', 'Mispress', 'Misprint', 'Mixed', 'Mixtape', 'Numbered', 'Partially Mixed', 'Partially Unofficial', 'Picture Disk', 'Promo', 'Reissue', 'Remastered', 'Repress', 'Sampler', 'Special Edition', 'Styrene', 'Test Pressing', 'Transcription', 'Unofficial Release', 'White Label'],
  },
};

for (let fmt in descriptors) {
  if (!descriptors.hasOwnProperty(fmt)) continue;
  for (let cat in descriptors[fmt]) {
    if (!descriptors[fmt].hasOwnProperty(cat)) continue;
    descriptors[fmt][cat] = descriptors[fmt][cat].map(item => {
      return {key: item, text: item, value: item}
    });
  }
}

function FormatSpecification({format}) {
  return <table> {Object.keys(descriptors[format]).map(cat => {
    return (
      <tr>
        <td style={{width:'10em'}}>{cat}</td>
        <td>
          <Dropdown
            style={{width:'30em'}}
            placeholder={cat}
            multiple
            search
            selection
            options={descriptors[format][cat]}
          />
        </td>
      </tr>
    )
  })}</table>;
}

export default FormatSpecification;