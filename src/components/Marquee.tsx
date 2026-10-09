import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface ItemType {
    id: string
    nameBn: string,
    categoryIcon: string

}
const Marquee = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data:ItemType[] = await res.json();
   console.log(data)
   
    return (
        <div className="p-2 bg-green-100 shadow-md">
            <MarqueeText direction="right" duration={10} pauseOnHover={true}>
            {
                data.map(item => <span key={item.id}>
                    <span>{item.nameBn}</span>
                    <span className='mx-4'>•</span>
                    <span>{item.categoryIcon}</span>
                  
                </span>)
            }
            </MarqueeText>
        </div>
    );
};

export default Marquee;