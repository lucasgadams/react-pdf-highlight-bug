- This repros the highlighting issue. When selecting text the last line is not contained in the selectedText prop. This happens on every pdf.
- The issue goes away when turning off react strict mode in `next.config.mjs`. I tried many other things and could not find anything else that fixed the issue.
- This project uses:
  - node v18.3.0
  - nextjs v12.3.2
  - react-pdf-viewer@3.7.0
  - typescript@4.7.4
  - pdfjs-dist@2.16.105

- `reactStrictMode: true` the last line is cut off
<img width="1511" alt="image" src="https://user-images.githubusercontent.com/36425095/200400524-2f3dd876-8031-4a8a-b750-6f73cd552a9d.png">

- `reactStrictMode: false` both lines are correctly selected
<img width="1497" alt="image" src="https://user-images.githubusercontent.com/36425095/200400732-9790fc5b-5e58-48b6-9778-6bcc309fcd3e.png">
