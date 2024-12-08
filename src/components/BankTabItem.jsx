"use client";

import { useSearchParams, useNavigate } from "react-router-dom";
import { cn, formUrlQuery } from "@/lib/utils";
import { bankTabItemProps } from "@/props/componentProps";
import { useAtom } from "jotai";
import { bankIdAtom } from "@/jotai/atoms";

export const BankTabItem = ({ account, appwriteItemId }) => {
  //const searchParams = useSearchParams();
  //const navigate = useNavigate();
  const [bankIdAt, setBankIdAtom] = useAtom(bankIdAtom);
  const isActive = bankIdAt === account?.bankId;

  const handleBankChange = () => {
    setBankIdAtom(account.bankId);
  };

  return (
    <div
      onClick={handleBankChange}
      className={cn(`banktab-item`, {
        " border-blue-600": isActive,
      })}
    >
      <p
        className={cn(`text-16 line-clamp-1 flex-1 font-medium text-gray-500`, {
          " text-blue-600": isActive,
        })}
      >
        {account.name}
      </p>
    </div>
  );
};

BankTabItem.propTypes = bankTabItemProps;
