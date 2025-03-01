import { useEffect, useState } from 'react';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Örnek blog verileri (API'den çekilebilir)
    const sampleBlogs = [
      { id: 1, title: 'İlk Blog Yazısı', content: 'Bu bir örnek blog yazısıdır.' },
      { id: 2, title: 'İkinci Blog Yazısı', content: 'Bu da başka bir örnek blog yazısıdır.' },
    ];
    setBlogs(sampleBlogs);
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
