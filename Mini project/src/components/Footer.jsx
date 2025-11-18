export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-1">
          © {year} <strong>Travel Booking Platform</strong>. All rights reserved.
        </p>
        <small className="text-secondary">Crafted by Karthik</small>
      </div>
    </footer>
  );
}
