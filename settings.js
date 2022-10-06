//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94714568996']
global.premium = ['94714568996']
global.ownernomer = '94714568996'
global.ownername = 'NADUN THATHSARA'
global.botname = 'FENIXBOT-MD'
global.footer = '©FENIX-MD.'
global.ig = 'https://github.com/nexusNw'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/nexusNw/Gojo-Satoru'
global.myweb = 'https://m.youtube.com/channel/UCbPd4PThu7MTLzjyvQKNhOA/channels'
global.packname = 'FENIX-MD'
global.author = 'NADUN THATHSARA'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Wait A minute...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file){
  "creds": {
    "noiseKey": {
      "private": {
        "type": "Buffer",
        "data": "8Hw+Dev8wcg5RMUNoO9/JxO9ogmteeSkTta0wmg0REo="
      },
      "public": {
        "type": "Buffer",
        "data": "yLrxibSuP5xFi6T4ypqdcPMb3yQATJ05UFhlMlR/5xw="
      }
    },
    "signedIdentityKey": {
      "private": {
        "type": "Buffer",
        "data": "wGfpp3KBZyNQq6jbTzhOH5uM/Jtq1qdhtndZjfpI5EE="
      },
      "public": {
        "type": "Buffer",
        "data": "edG7wchs1YwEFRfnHG/2LKtcw8Xv4Gj7Ta6/T5bfc0o="
      }
    },
    "signedPreKey": {
      "keyPair": {
        "private": {
          "type": "Buffer",
          "data": "oDKAlVqvvFi/8V2xgqHAvUw6f04zB8uv+nuOYm6003c="
        },
        "public": {
          "type": "Buffer",
          "data": "yTnZhfOgCFKCUJlWFbKTf31dF4AGJKGayYOfMtXP5EU="
        }
      },
      "signature": {
        "type": "Buffer",
        "data": "4Uc7JM0obS9skPTF9RL2sQeX0duSpKgcuCIxp4i6R9OqVqYYT7PC527w1vY/2RD+mAdlTWAAVWgPqO6DLpr5iA=="
      },
      "keyId": 1
    },
    "registrationId": 96,
    "advSecretKey": "GWbF63sBO39cWWn8G57cHNTpyROdG9JxcEMIyQhF+h0=",
    "nextPreKeyId": 31,
    "firstUnuploadedPreKeyId": 31,
    "serverHasPreKeys": true,
    "account": {
      "details": "CLOR86kDEJDnxpkGGAM=",
      "accountSignatureKey": "qj9b7RunsSkdFJI6b+5nvk3sngRRbxEfw8QDEVHkxCc=",
      "accountSignature": "Wf3RzC/5JN4iXFtg7exDoJeLIYlI9TXMqiiYaJGoH+eTUcKAigxjQdirKramFaa7DiVSYMwbQbKJ8Q2Bgl3uAA==",
      "deviceSignature": "Jrqa49SxKwsuwMDyJ8uU1z/H4hrU76keOL3TwfzpVn6FiDx4H0L657+IMJPoxCWTVFnKJBbqZJzctFxPUVh4gQ=="
    },
    "me": {
      "id": "94776638383:3@s.whatsapp.net",
      "verifiedName": "",
      "name": "nadunthathsara44"
    },
    "signalIdentities": [
      {
        "identifier": {
          "name": "94776638383:3@s.whatsapp.net",
          "deviceId": 0
        },
        "identifierKey": {
          "type": "Buffer",
          "data": "Bao/W+0bp7EpHRSSOm/uZ75N7J4EUW8RH8PEAxFR5MQn"
        }
      }
    ],
    "lastAccountSyncTimestamp": 1664201620,
    "myAppStateKeyId": "AAAAAPlY"
  },
  "keys": {
    "preKeys": {
      "1": {
        "private": {
          "type": "Buffer",
          "data": "wCz6/2d356zUlHPCVtO+QIKMDz+aQw4UkEVmwlvHCnQ="
        },
        "public": {
          "type": "Buffer",
          "data": "Fg2dbAq8w7aV/bAymt9MxueFjfEVwk9CwNLT18RAMRA="
        }
      },
      "2": {
        "private": {
          "type": "Buffer",
          "data": "QJ70Lse0B3tjr4Xks9VRGP0uHg5YzQBT5GK8V25LPF8="
        },
        "public": {
          "type": "Buffer",
          "data": "Lsz2LLW5DezpB6mWhpUadkYyv4ek26478SH3MAsBaBQ="
        }
      },
      "3": {
        "private": {
          "type": "Buffer",
          "data": "WP8ipCDpU1vX7rNtF+emSD6pJD2O2hfhGQ9xVQV0vW8="
        },
        "public": {
          "type": "Buffer",
          "data": "KOYcm6D6WpfN+haRl/l06VXmLF08Lwg5ivpBzYiSlAc="
        }
      },
      "4": {
        "private": {
          "type": "Buffer",
          "data": "mNOPQJbapTeXWcq35Cl73gefEH2c4VK1ioJDwnX1m3E="
        },
        "public": {
          "type": "Buffer",
          "data": "9FwZDyIdO0fhD79EKTHRbvTkuhBAEb2Qc/ZD1L7WZBI="
        }
      },
      "5": {
        "private": {
          "type": "Buffer",
          "data": "8NtuabsXo0x0XU/RgXY6gSc5PFgl0YcqDEd+P/TSpG4="
        },
        "public": {
          "type": "Buffer",
          "data": "rmtHTpiJ3wVNlBZLysmODc+3GMc0zQ9TEO+ajhaRyk4="
        }
      },
      "6": {
        "private": {
          "type": "Buffer",
          "data": "AMMOI+qH7zwtb5a1WVsEwQGDU0+vhEM7hItvow1XBmg="
        },
        "public": {
          "type": "Buffer",
          "data": "yYKJTOUhUZkybX1uGdG8GmaxMih9YJUsuKLJ5X8UkjY="
        }
      },
      "7": {
        "private": {
          "type": "Buffer",
          "data": "gFm00ieT7JCDIluzKcx1eZJYdRG5OhJiUQ/u7UnHrGM="
        },
        "public": {
          "type": "Buffer",
          "data": "U7/0eAUIR5mEdRxN1zYExnrfI+9T8LvAElohiopvyFU="
        }
      },
      "8": {
        "private": {
          "type": "Buffer",
          "data": "MInCzr6nZ8YHZTIvw14fFhBv2jd/CpoRmnKLO7bNKHE="
        },
        "public": {
          "type": "Buffer",
          "data": "aRtBc4DMmCn9K9puoCExi5L5BtF7ki1V+RTCQiOyHyU="
        }
      },
      "9": {
        "private": {
          "type": "Buffer",
          "data": "cLBNsdYA97bC8eb3ZYIuBR+s0OAYiTwW5b1nKsYtN0Y="
        },
        "public": {
          "type": "Buffer",
          "data": "4l+4V+eJFK48tahyWApLbvAJjSJIvJCGJJpCuf05Exs="
        }
      },
      "10": {
        "private": {
          "type": "Buffer",
          "data": "oHbj34eeceUeVfgcwKl+ZSmSEm9L/Pjw7VPMStGN/UM="
        },
        "public": {
          "type": "Buffer",
          "data": "LJBSQ6tG1siGCiT3vx5PalVlya7c5pRL6sAV88X6f0I="
        }
      },
      "11": {
        "private": {
          "type": "Buffer",
          "data": "CIuhVEfP1KvTzvYpxZfAZufeFXKh0sWX4ZCjvBU3uFE="
        },
        "public": {
          "type": "Buffer",
          "data": "jcwWgbOOD8SMynO1B7JUB0ly2jSJ+6qGltMd74id0kA="
        }
      },
      "12": {
        "private": {
          "type": "Buffer",
          "data": "qBVbzdWXa3/i0YFK521Hcl0LbPhobfuIgl5uloXuSV4="
        },
        "public": {
          "type": "Buffer",
  
})
