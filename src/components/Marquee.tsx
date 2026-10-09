import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface ItemType {
    id: string
    nameBn: string,
    categoryIcon: string
    image: string
    unit: string
    today: number
    change: {
        dir: string
        pct: number
    }

}
const Marquee = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data:ItemType[] = await res.json();
   console.log(data)
   
    return (
         <div className="bg-white shadow-md py-3 overflow-hidden">
      <MarqueeText
        direction="right"
        duration={10}
        pauseOnHover={true}
      >
        {data.map((item) => (
          <span
            key={item.id}
            className="inline-flex items-center gap-2 mx-5 text-sm font-medium"
          >
            <span>{item.image}</span>

            <span>{item.nameBn}</span>

            <span className="font-semibold text-gray-800">
              ৳{item.today}/{item.unit === "kg" ? "কেজি" : item.unit}
            </span>

            <span
              className={
                item.change.dir === "up"
                  ? "text-red-500"
                  : "text-green-600"
              }
            >
              {item.change.dir === "up" ? "▲" : "▼"}{" "}
              {item.change.pct}%
            </span>

            <span className="text-gray-300">•</span>
          </span>
        ))}
      </MarqueeText>
    </div>
    );
};

export default Marquee;