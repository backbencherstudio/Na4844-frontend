// utils/transformPlans.ts
import { BackendResponse, Plan, PlanType, PeriodType } from "./subscription";

// Map backend period to human-readable label
export const periodLabelMap: Record<PeriodType, string> = {
  monthly: "Month",
  semiannual: "Six Months",
  annual: "Year",
};

// Static UI data for features and descriptions
export const staticPlanData: Plan[] = [
  {
    id: 1,
    title: "CORE",
    desc: { monthly: 409, semiannual: 627, annual: 865 },
    package: "Month",
    prices: { monthly: 409, semiannual: 627, annual: 865 },
    features: [
      { text: "Parturient sed nunc neque", type: "minus" },
      { text: "Vel enim ultrices et ornare", type: "minus" },
      { text: "Aenean cursus nec amet", type: "minus" },
      { text: "Adipiscing accumsan ut", type: "minus" },
      { text: "Parturient imperdiet id urna", type: "minus" },
      { text: "Mollis porta bibendum", type: "minus" },
      { text: "Vel nec dapibus sem feugiat", type: "check" },
      { text: "Elementum pretium sed", type: "check" },
      { text: "Ridiculus urna habitasse", type: "check" },
    ],
  },
  {
    id: 2,
    title: "GROWTH",
    desc: { monthly: 582, semiannual: 765, annual: 978 },
    package: "Six Months",
    prices: { monthly: 582, semiannual: 765, annual: 978 },
    glow: true,
    isPopular: true,
    features: [
      { text: "Ipsum eu mauris in ut massa", type: "check" },
      { text: "At id vel sit aliquet venenatis", type: "check" },
      { text: "At id vel sit aliquet venenatis", type: "check" },
      { text: "Aliquet amet donec pulvinar", type: "check" },
      { text: "Justo et in interdum a nulla", type: "check" },
      { text: "Sit molestie libero in dui", type: "check" },
      { text: "Ultricies gravida tempus orci", type: "check" },
      { text: "Eu eget cras nunc facilisis", type: "check" },
      { text: "Gravida auctor sed donec", type: "check" },
    ],
  },
  {
    id: 3,
    title: "PLUS",
    desc: { monthly: 820, semiannual: 956, annual: 980 },
    package: "Year",
    prices: { monthly: 820, semiannual: 956, annual: 980 },
    features: [
      { text: "Morbi diam eros scelerisque", type: "check" },
      { text: "Urna facilisis mattis mi nulla", type: "check" },
      { text: "Volutpat odio nunc non vel", type: "check" },
      { text: "Lorem at in aliquam tellus", type: "check" },
      { text: "Molestie a vel in sed enim", type: "check" },
      { text: "Interdum lectus lorem ipsum", type: "check" },
      { text: "Nunc quis aliquet ornare", type: "check" },
      { text: "Ut bibendum mauris nisl", type: "check" },
      { text: "Dapibus at eget diam vitae", type: "check" },
    ],
  },
];

// Transform backend response to Plan[]
export const transformBackendToPlans = (backendData: BackendResponse): Plan[] => {
  if (!backendData?.data || backendData.data.length === 0) return staticPlanData;

  const groupedPrices = backendData.data.reduce((acc, item) => {
    const planName = item.plan.toUpperCase() as PlanType;
    const interval = item.interval.toLowerCase() as PeriodType;

    if (!acc[planName]) acc[planName] = {} as Record<PeriodType, number>;
    acc[planName][interval] = Number(item.price);
    return acc;
  }, {} as Record<PlanType, Record<PeriodType, number>>);

  return staticPlanData.map((staticPlan) => ({
    ...staticPlan,
    prices: {
      monthly: groupedPrices[staticPlan.title]?.monthly ?? 0,
      semiannual: groupedPrices[staticPlan.title]?.semiannual ?? 0,
      annual: groupedPrices[staticPlan.title]?.annual ?? 0,
    },
  }));
};

// Mock data
export const mockBackendResponse: BackendResponse = {
  success: true,
  message: "Subscription plans retrieved successfully",
  data: [
    { id: "1", plan: "PLUS", interval: "ANNUAL", price: "5500", created_at: "", updated_at: "", deleted_at: null },
    { id: "2", plan: "PLUS", interval: "SEMIANNUAL", price: "4500", created_at: "", updated_at: "", deleted_at: null },
    { id: "3", plan: "PLUS", interval: "MONTHLY", price: "2200", created_at: "", updated_at: "", deleted_at: null },
    { id: "4", plan: "GROWTH", interval: "ANNUAL", price: "2500", created_at: "", updated_at: "", deleted_at: null },
    { id: "5", plan: "GROWTH", interval: "SEMIANNUAL", price: "2500", created_at: "", updated_at: "", deleted_at: null },
    { id: "6", plan: "GROWTH", interval: "MONTHLY", price: "1500", created_at: "", updated_at: "", deleted_at: null },
    { id: "7", plan: "CORE", interval: "ANNUAL", price: "3000", created_at: "", updated_at: "", deleted_at: null },
    { id: "8", plan: "CORE", interval: "SEMIANNUAL", price: "434", created_at: "", updated_at: "", deleted_at: null },
    { id: "9", plan: "CORE", interval: "MONTHLY", price: "2000", created_at: "", updated_at: "", deleted_at: null },
  ],
};