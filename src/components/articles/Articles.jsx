import Image from "next/image";
import money from "../../../public/assets/images/image-currency.jpg";
import restaurant from "../../../public/assets/images/image-restaurant.jpg";
import plane from "../../../public/assets/images/image-plane.jpg";
import confetti from "../../../public/assets/images/image-confetti.jpg";

const Articles = () => {
  return (
    <div className="py-12">
      <h1 className="text-center text-4xl opacity-80 mb-12">Latest Articles</h1>
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:gap-4 lg:grid-cols-4">
        <div className="flex flex-col">
          <div className="w-full relative aspect-[4/3] md:aspect-[2/1]">
            <Image
              src={money}
              alt="money"
              fill
              sizes="(max-width: 767px) 100vw,
                    (max-width: 1023px) 50vw,
                    (max-width: 1439px) 33vw,
                    360px"
              className="rounded-t-md object-cover"
            />
          </div>
          <div className="bg-neutral-white opacity-90 shadow-xs p-6 grow">
            <p className="text-xs text-neutral-gray-600 mb-6 sm:text-sm">
              By Claire Robinson
            </p>
            <h5 className="text-base/tight font-semibold text-gray-600 mb-2">
              Receive money in any currency with
              <br className="sm:hidden lg:hidden" /> no fees
            </h5>
            <p className="text-base/tight text-neutral-gray-600 font-semibold tracking-tighter">
              The World is getting smaller and we're
              <br className="sm:hidden" /> becoming more mobile. So why should
              <br className="sm:hidden" /> you be forced to only receive money
              in a
              <br className="sm:hidden" />
              single...
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative w-full aspect-[4/3] md:aspect-[2/1]">
            <Image
              src={restaurant}
              alt="restaurant"
              fill
              sizes="(max-width: 767px) 100vw,
                    (max-width: 1023px) 50vw,
                    (max-width: 1439px) 33vw,
                    360px"
              className="object-cover rounded-t-md"
            />
          </div>
          <div className="bg-neutral-white opacity-90 shadow-xs p-6 grow">
            <p className="text-xs text-neutral-gray-600 mb-6 md:text-sm">
              By wilson Hutton
            </p>
            <h5 className="text-base/tight font-semibold text-gray-600 mb-2">
              Treat yourself without <br className="sm:hidden" />
              worrying about money
            </h5>
            <p className="text-base/tight text-neutral-gray-600 font-semibold tracking-tighter">
              Our simple budgeting feature allows you
              <br className="sm:hidden" />
              to seperate out your spending and set
              <br className="sm:hidden" />
              realistic limits each month. That means
              <br className="sm:hidden" />
              you...
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative w-full aspect-[4/3] md:aspect-[2/1]">
            <Image
              src={plane}
              alt="plane"
              fill
              sizes="(max-width: 767px) 100vw,
                    (max-width: 1023px) 50vw,
                    (max-width: 1439px) 33vw,
                    360px"
              className="object-cover rounded-t-md"
            />
          </div>
          <div className="bg-neutral-white opacity-90 shadow-xs p-6 grow">
            <p className="text-xs text-neutral-gray-600 mb-6 md:text-sm">
              By wilson Hutton
            </p>
            <h5 className="text-base/tight font-semibold text-gray-600 mb-2">
              Take your Digitalbank card <br className="sm:hidden" />
              wherever you go
            </h5>
            <p className="text-base/tight text-neutral-gray-600 font-semibold tracking-tighter">
              We want you to enjoy your travels. This is
              <br className="sm:hidden" />
              why we don't charge any fees on
              <br className="sm:hidden" />
              purchases while you're abroad. We'll
              <br className="sm:hidden" />
              even...
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative w-full aspect-[4/3] md:aspect-[2/1]">
            <Image
              src={confetti}
              alt="confetti"
              fill
              sizes="(max-width: 767px) 100vw,
                    (max-width: 1023px) 50vw,
                    (max-width: 1439px) 33vw,
                    360px"
              className="object-cover rounded-t-md"
            />
          </div>
          <div className="bg-neutral-white opacity-90 shadow-xs p-6 grow">
            <p className="text-xs text-neutral-gray-600 mb-6 sm:text-sm">
              By Claire Robinson
            </p>
            <h5 className="text-base/tight font-semibold text-gray-600 mb-2">
              Our invite-only Beta accounts are <br className="sm:hidden" />
              now live!
            </h5>
            <p className="text-base/tight text-neutral-gray-600 font-semibold tracking-tighter">
              After a lot of hard work by the whole
              <br className="sm:hidden" /> team, we're excited to launch our
              closed
              <br className="sm:hidden" />
              beta. It's easy to request an invite
              <br className="sm:hidden" /> through...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
