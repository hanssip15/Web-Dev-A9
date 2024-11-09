import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const CMSLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      navigate('/'); // Redirect ke halaman utama jika bukan admin
    }
  }, [navigate]);

  // Fungsi untuk kembali ke halaman root
  const handleBackToRoot = () => {
    navigate('/');
  };

  return (
    <div className="cms-layout">
      <h2>Admin CMS</h2>
      <nav>
        <ul>
          <li><a href="/admin/dashboard">Dashboard</a></li>
          <li><a href="/admin/movies">Manage Movies</a></li>
          <li><a href="/admin/reviews">Manage Reviews</a></li>
          <li><a href="/admin/actors">Manage Actors</a></li>
          <li><a href="/admin/awards">Manage Awards</a></li>
          <li><a href="/admin/requests">Manage Requests</a></li>
          <li><a href="/admin/users">Manage Users</a></li>
        </ul>
      </nav>
      <Outlet />
      {/* Tombol Kembali ke Root */}
      <div className="back-to-root">
        <button onClick={handleBackToRoot}>
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
};

export default CMSLayout;