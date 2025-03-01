import Header from '../components/Header';
import BlogList from '../components/BlogList';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Blog Yazıları</h1>
        <BlogList />
      </main>
    </div>
  );
}
