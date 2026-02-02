import IconOnline from "../icons/IconOnline";
import IconBudgeting from "../icons/IconBudgeting";
import IconOnbording from "../icons/IconOnbording";
import IconAPI from "../icons/IconAPI";
const Benefit = () => {
  return (
    <div className="py-12 lg:-mt-40" id="about">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl text-center opacity-70 md:text-3xl lg:text-start">
          Why choose DigitalBank?
        </h1>
        <p className="mb-8 text-sm leading-tight text-neutral-gray-600 text-center short-landscape-font sm:text-[18px] lg:text-start lg:leading-6 lg:text-base">
          We leverage Open Banking to turn your bank
          <br className="lg:hidden" />
          account into your financial hub.
          <br className="xl:hidden" /> Control your finances like never before.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-4">
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <IconOnline clasName="h-20 w-20" />
          <h1 className="text-3xl text-center opacity-70 lg:text-xl lg:font-semibold lg:text-start">
            Online Banking
          </h1>
          <p className="text-neutral-gray-600 text-center leading-tight text-sm short-landscape-font sm:text-[18px] lg:text-base lg:text-start">
            Our modern web and mobile applications allow
            <br className="lg:hidden" /> you to keep track of your finances
            wherever you <br className="lg:hidden" /> area in the world
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <IconBudgeting className="h-20 w-20" />
          <h1 className="text-3xl text-center opacity-70 lg:text-xl lg:font-semibold lg:text-start">
            Simple Budgeting
          </h1>
          <p className="text-neutral-gray-600 text-center leading-tight text-sm short-landscape-font sm:text-[18px] lg:text-base lg:text-start">
            See exactly where your money goes each month.
            <br className="lg:hidden" /> Receive notifications when you're close
            to hitting
            <br className="lg:hidden" /> your limits.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <IconOnbording clasName="w-20 h-20" />
          <h1 className="text-3xl text-center opacity-70 lg:text-xl lg:font-semibold lg:text-start">
            Fast Onboarding
          </h1>
          <p className="text-neutral-gray-600 text-center leading-tight text-sm short-landscape-font sm:text-[18px] lg:text-base lg:text-start">
            We don't do branches. Open your account in
            <br className="lg:hidden" /> minutes online and start taking control
            of your
            <br className="lg:hidden" />
            finances right away.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <IconAPI className="h-20 w-20" />
          <h1 className="text-3xl text-center opacity-70 lg:text-xl lg:font-semibold lg:text-start">
            Open API
          </h1>
          <p className="text-neutral-gray-600 text-center leading-tight text-sm short-landscape-font sm:text-[18px] lg:text-base lg:text-start">
            Manage your savings. Investments, pension, and
            <br className="lg:hidden" /> much more from one account. Tracking
            your
            <br className="lg:hidden" />
            money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
