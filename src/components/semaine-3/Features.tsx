import Image from "next/image";
import FeaturesImage from "../../assets/semaine-2/features.png";
import Icon1 from "../../assets/semaine-2/icon-1.png";
import Icon2 from "../../assets/semaine-2/icon-2.png";
import Icon3 from "../../assets/semaine-2/icon-3.png";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const Features = () => (
  <div className="flex w-3/4 flex-col items-center gap-20">
    <div className="flex w-1/3 flex-col gap-6">
      <p className="text-center text-5xl">
        Features that work for your future.
      </p>
      <p className="text-center font-thin">
        Check out our amazing features and experience the power of Vaultflow for
        yourself.
      </p>
    </div>
    <div className="flex w-full flex-col gap-14">
      <div className="flex w-full gap-6">
        <Card className="w-1/2 border-indigo-800 bg-indigo-950 p-16 shadow-indigo-100">
          <CardContent className="flex flex-col gap-9 p-0">
            <Image src={Icon1} alt="Icon 1" width={50} height={50} />
            <div className="flex flex-col gap-1">
              <p className="text-4xl text-white">Analytics Dashboard</p>
              <p className="text-white">
                Our Analytics Dashboard provides a clear and intuitive interface
                for you to easily analyze your data. From customizable graphs to
                real-time data updates, our dashboard offers everything you need
                to gain valuable insights.
              </p>
            </div>
            <Button variant="link" className="w-fit p-1 text-white">
              View dashboard
            </Button>
          </CardContent>
        </Card>
        <Card className="w-1/2 border-indigo-800 bg-indigo-950 p-16 shadow-indigo-100">
          <CardContent className="flex flex-col gap-9 p-0">
            <Image src={Icon2} alt="Icon 2" width={50} height={50} />
            <div className="flex flex-col gap-1">
              <p className="text-4xl text-white">Digital Credit Tokens</p>
              <p className="text-white">
                Reward your customers and incentivize engagement with our
                innovative digital credit tokens. Our tokens can be customized
                to match your branding, and are a flexible and scalable way to
                drive customer loyalty and encourage repeat business.
              </p>
            </div>
            <Button variant="link" className="w-fit p-1 text-white">
              View tokens
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card className="w-full border-indigo-800 bg-indigo-950 p-16 shadow-indigo-100">
        <CardContent className="flex items-end">
          <div className="flex w-1/2 flex-col gap-9 p-0">
            <Image src={Icon3} alt="Icon 3" width={50} height={50} />
            <div className="flex flex-col gap-1">
              <p className="text-4xl text-white">Analytics Dashboard</p>
              <p className="text-white">
                Our Analytics Dashboard provides a clear and intuitive interface
                for you to easily analyze your data. From customizable graphs to
                real-time data updates, our dashboard offers everything you need
                to gain valuable insights.
              </p>
            </div>
            <Button variant="link" className="w-fit p-1 text-white">
              View dashboard
            </Button>
          </div>
          <div className="w-1/2 justify-end">
            <Image src={FeaturesImage} alt="Features Image" />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full border-indigo-800 bg-indigo-950 p-16 shadow-indigo-100">
        <CardContent className="flex flex-col items-center gap-6">
          <p className="text-center text-5xl font-bold text-white">
            Our powerful analytics provides invaluable insights.
          </p>
          <p className="text-center text-white">
            Unlock the power of data with our cutting-edge analytics product.
            Get instant insights with our user-friendly Analytics Dashboard, and
            take advantage of our innovative digital credit tokens to reward
            your customers and incentivize engagement.{" "}
          </p>
          <Button className="w-fit rounded-full border bg-transparent">
            Download the app
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Features;
