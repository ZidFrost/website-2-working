import '../globals.css';

export const metadata = {
  title: '$HDY | Memecoin',
  description: 'Join the wildest ride on the blockchain – $HDY to the moon!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
