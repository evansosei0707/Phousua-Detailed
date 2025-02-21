import clsx from "clsx"
import Price from "./price"
import Prose from "@/components/prose"

const Label = ({
  title,
  amount,
  description,
  currencyCode,
}: {
  title: string
  amount: string
  description: string
  currencyCode: string
}) => {
  return (
    <div className={clsx(" flex w-full @container/label")}>
      <div className="flex flex-col gap-2 py-4 items-start justify-center rounded-full  text-xl font-semibold  dark:text-white">
        <h3 className="mr-4 line-clamp-2 grow leading-none font-medium tracking-tight">
          {title}
        </h3>
        {description ? (
          <Prose
            className=" text-sm leading-tight text-secondary/60 dark:text-secondary font-medium line-clamp-1  dark:text-white/[60%]"
            html={description}
          />
        ) : null}
        <Price
          className="flex-none text-base text-black dark:text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  )
}

export default Label
