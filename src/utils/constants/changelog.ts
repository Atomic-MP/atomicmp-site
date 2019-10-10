import moment from "moment";

interface IBuildInfo {
  date: moment.Moment;
  link: string;
  version: string;
  changelog: string[];
}

function dateConstructor(str: string): moment.Moment {
  return moment(str, "MMMM DD, YYYY")
}

const buildsList: IBuildInfo[] = [
    {
      changelog: [
        "Added Pack Birhorner Following and new Foliage ",
        "Fixed some Shop Functions",
      ],
      date: "Aug 04, 2019",
      link: "https://drive.google.com/file/d/1Yz9NDuRcBsTvmsyo49FsXW55QSwErkIa/view?usp=sharing",
      version: "0.4.8",
    },
    {
      changelog: [
        "Ai can now lunge and should not follow players after respawn",
        "Fixed Item Spamming From Containers",
      ],
      date: "Jun 22, 2019",
      link: "https://drive.google.com/file/d/1-Zg8kYsnKhMvZcbT7X5M2cQ5PqVslqU_/view?usp=sharing",
      version: "0.4.1",
    },
    {
      changelog: [
        "Performance Fixes",
      ],
      date: "Jun 8, 2019",
      link: "https://drive.google.com/file/d/1i7epzMKsyT3OK0j6280yDznHWMS9-KGj/view?usp=sharing",
      version: "0.4.0",
    },
    {
      changelog: [
        "Fixed floating guns appearing on crash",
      ],
      date: "May 22, 2019",
      link: "http://download2265.mediafire.com/57nhzpxi0gag/h1i15jg76m3s2wt/AMP.rar",
      version: "0.3.9",
    },
    {
      changelog: [
        "New Guns",
        "Changes to Bullet System",
        "Tweaked Ambient Occlusion",
      ],
      date: "May 05, 2019",
      link: "https://drive.google.com/file/d/1vhtXRnH3ilHbpDA3itGxoKopgheN7Uy6/view?usp=sharing",
      version: "0.3.8",
    },
    {
      changelog: [
        "Bloatfly AI tweak",
        "Raider AI tweak",
        "Tweaked Hunger/Thirst Values",
      ],
      date: "May 04, 2019",
      link: "https://drive.google.com/file/d/1vhtXRnH3ilHbpDA3itGxoKopgheN7Uy6/view?usp=sharing",
      version: "0.3.7",
    },
    {
      changelog: [
        "Bloatfly projectile now does damage",
        "Adjusted 10mm Fire rate (Buff)",
        "Adjusted .308 Fire rate (Buff)",
        "Fixed the need to click once before you can exit the Pipboy with 'Tab'",
        "Fixed guns appearing to float when switching between 1st and 3rd person quickly",
        "Fixed aiming being clunky in high latency situations",
        "Fixed Pipboy UI scroll bar not matching the custom colour",
        "Fixed 'X' button not being correctly coloured in the setting menu",
        "Fixed 'X' button not functioning",
      ],
      date: "May 01, 2019",
      link: "https://drive.google.com/file/d/1zrWlNRC44rflcVLZLnppqNpIjkEiVElt/view?usp=sharing",
      version: "0.3.6",
    },
    {
      changelog: [
        "Performance changes to lighting and town, Fixed Jukebox.",
      ],
      date: "April 28, 2019",
      link: "https://drive.google.com/file/d/1m3xKr7IgnqS6vFQ73izW6yQcNz-IzIt-/view?usp=sharing",
      version: "0.3.5",
    },
    {
      changelog: [
        "AI navigation and damage fixed for radscorpions, geckos, bighorners, raiders.",
        "Changes to Lighting for map and tunnel.",
        "Changes to gun sounds.",
      ],
      date: "April 27, 2019",
      link: "http://www.mediafire.com/file/3319e8f5kzj8jm4/AMP.rar/file",
      version: "0.3.4",
    },
    {
      changelog: [
        "Tweaked the lighting in the Character Customizer"
      ],
      date: "April 22, 2019",
      link: "https://drive.google.com/file/d/1m3xKr7IgnqS6vFQ73izW6yQcNz-IzIt-/view?usp=sharing",
      version: "0.3.3"
    },
    {
      changelog: ["Fixed Appearance-Set authentication related bug"],
      date: "April 21, 2019",
      link: "https://drive.google.com/file/d/1BjD1VFWHafLxqbvAUElnxaq7fFwGsg6B/view?usp=sharing",
      version: "0.3.2",
    },
    {
      changelog: [
        "Increased melee hit range",
        "Added in death and respawn system",
        "Shouldn't have a random floating sphere at default spawn now."
      ],
      date: "December 31, 2018",
      link: "https://www.dropbox.com/s/7aqbge270eah79i/WindowsNoEditor.rar?dl=0",
      version: "0.3.0",
    },
    {
      changelog: [
        "Re-created hunger and thirst",
        "Attempted a fix for AP breaking for multiple players.",
        "Rebuilt unarmed combat",
        "Added blood visual and sound effects to punch",
        "Added switch between 1st and 3rd person",
      ],
      date: "December 30, 2018",
      link: "https://www.dropbox.com/s/m66j1mw62bqgqer/WindowsNoEditor.rar?dl=0",
      version: "0.2.1",
    },
    {
      changelog: [
        "Fully implemented Server-side saving"
      ],
      date: "December 27, 2018",
      link: "https://www.dropbox.com/s/62dxo920hyotdc8/WindowsNoEditor.zip?dl=0",
      version: "0.2.0",
    },
    {
      changelog: [
        "Created RPG speech system"
      ],
      date: "December 22, 2018",
      link: "https://www.dropbox.com/s/h7rghct0yohb091/WindowsNoEditor.zip?dl=0",
      version: "0.1.4",
    },
    {
      changelog: [
        "Added Submachine Gun"
      ],
      date: "December 21, 2018",
      link: "https://www.dropbox.com/s/ipyl8mo6wrjgswp/WindowsNoEditor.zip?dl=0",
      version: "0.1.3",
    },
    {
      changelog: [
        "Experimented with Server-side saving"
      ],
      date: "September 11, 2018",
      link: "https://www.dropbox.com/s/ozn48nurzd65hc2/WindowsNoEditor.zip?dl=0",
      version: "0.1.2",
    },
    {
      changelog: [
        "Implemented character customization"
      ],
      date: "September 9, 2018",
      link: "https://www.dropbox.com/s/jdhkdzz1pt89gps/AMP-09-09-18.zip?dl=0",
      version: "0.1.1",
    },
    {
      changelog: [
        "Initial Implementation"
      ],
      date: "August 25, 2018",
      link: "https://www.dropbox.com/s/d38336bouy9efoi/AMPBuild_29-07-18.zip?dl=0",
      version: "0.1.0",
    },
  ]
  .map(data => ({...data, date: dateConstructor(data.date)}))
  .sort((a, b) => b.date.unix() - a.date.unix())

export default buildsList;
