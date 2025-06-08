import Button from '@/components/common/Button';

export default function About() {
  return (
    <div>
      <h1>This is our about section</h1>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <Button size="small" shape="rounded-sm">Small Rounded-SM</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded-MD</Button>
        <Button size="large" shape="rounded-full">Large Rounded-Full</Button>
      </div>
    </div>

  );
}


