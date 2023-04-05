const JSEncrypt = require('../lib/index').default

const key = `
-----BEGIN PRIVATE KEY-----
MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAKSbBdrtJ7iULjpv
0gHy7qX1LaplO2tbe7t7mgJOUzWqWL1daBTXCRukufR46Vcx50Lm+X8BLf3wVSlo
W0QhRqO5ijSkMFh52seZ27t3uxsdpL7yC7KRngyP3JIaA6aLjIn3efhr3kVK6q/L
Lg+4zkuW+ZN9NAs6msj9Xqe4oTM3AgMBAAECgYEAixrXH+Q7JSlUx92nxC3gsC86
oD1csaVmM1KJHFnEyB1lUOKXCsWO1OWooIlt6For7cX0IviEPY3U6mFef3z/jBI0
hlV+XS78kvjkEB4l8/kbc07755lKwc3j7r5/UkU3vIGl1pcvi8EmGGNiZwRldH0E
WZ4f88yLOM1xJQDRFwECQQDSvPDyioIu/B+Ctn+Vc+4hNOhYzE858O2f3NmlhI+D
HS+ZYHmD25Kj+x2xeEBl5EOp7nUq8HoUCoFt9k4E4DZxAkEAx/WRcyII0SEiY5V1
Q4oiJ+OPQaZg/SSLzFzF8Nzv45hthBC7FWQyHNnIj/2Sy8/rltfo80vzwCzucI8O
JYtoJwJBAKTbxE6pRmCFQg1awYJkV+TIY/+bjVsRfIN0HRvcEP0MJwGAtG8Ppa78
suTz4sUTBk/4yNZXm9jzwv8IEU7FLDECQQDAoKKzxQ+1VzQntu02WTW6M4/n8H3y
n2hFQQI2nMBEAq1N0khHvTRBctOxUtg9m1kbAXgaGQsCEMbKjCVWqct1AkAhf218
YFNiDcn/orcpDojOa7l3kTvAZj6GQCue9ui8I06sTrYviZC07KKz3jvL8MRQar8h
x3UWWTM/UxZsajD9
-----END PRIVATE KEY-----
`

const longCiphertext = `
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
`
const decryptInstance = new JSEncrypt()
decryptInstance.setPrivateKey(key)

const plaintext = decryptInstance.decrypt(longCiphertext)
console.log(plaintext)
