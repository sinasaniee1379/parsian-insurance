export const thirdPartyBaseRates = {
  "pride-peykan-renault": {
    70: 114_554_000,
    150: 117_533_123,
    250: 121_257_025,
    350: 124_980_928,
  },

  "four-cylinder": {
    70: 131_815_200,
    150: 135_316_957,
    250: 139_694_151,
    350: 144_071_347,
  },

  "six-cylinder": {
    70: 145_601_500,
    150: 149_520_720,
    250: 154_419_744,
    350: 159_318_769,
  },

  van: {
    70: 137_544_000,
    150: 141_359_123,
    250: 146_128_025,
    350: 150_896_926,
  },

  "taxi-four-cylinder": {
    70: 158_178_240,
    150: 162_380_348,
    250: 167_632_982,
    350: 172_885_618,
  },

  "pickup-one-ton": {
    70: 129_506_300,
    150: 132_588_447,
    250: 136_441_130,
    350: 140_293_813,
  },

  "pickup-two-three-ton": {
    70: 150_276_500,
    150: 153_987_525,
    250: 158_626_305,
    350: 163_265_085,
  },

  motorcycle: {
    70: 33_744_700,
    200: 34_984_616,
  },
} as const;

export function calculateThirdPartyPremium(
  groupId: string,
  financial: number,
  discount: number,
): number | null {
  const group =
    thirdPartyBaseRates[groupId as keyof typeof thirdPartyBaseRates];

  if (!group) {
    return null;
  }

  const basePremium = (group as Record<number, number>)[financial];

  if (!basePremium) {
    return null;
  }

  if (discount < 5 || discount > 70 || discount % 5 !== 0) {
    return null;
  }

  return Math.round(basePremium * ((100 - discount) / 100));
}
