import Card from '@/components/common/Card';

export default function Home() {
    return(
    <div>
        <h1>This is our home page</h1>
        <Card title="House Available" content="2 bedroom duplex available, 3 months payment upfront" />
         <Card title="Not Available" content="This house is not available for rent" />
    </div>
    );
}