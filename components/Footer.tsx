import React from 'react';

export default function Footer() {
  return (
    <footer>
      배경화면{' '}
      <a href="https://kr.freepik.com/free-vector/simple-green-gradient-background-vector-for-business_35481337.htm#query=%EC%8B%AC%ED%94%8C%20%EB%B0%B0%EA%B2%BD&position=31&from_view=search&track=ais&uuid=296235f7-76dc-49f0-ba86-7bce208b9de4">
        작가 rawpixel.com
      </a>{' '}
      출처 Freepik
      <p className="bg-slate-900 text-white py-2 text-sm text-center">
        &copy; {new Date().getFullYear()}. Lee Ra Gyu. All Rights Reserved.
      </p>
    </footer>
  );
}
