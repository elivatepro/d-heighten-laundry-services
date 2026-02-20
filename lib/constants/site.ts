export const SITE_CONFIG = {
  name: "D'heighten Laundry",
  tagline: "Professional Laundry Service",
  phone: "+234 805 076 6253",
  phoneRaw: "08050766253",
  email: "dheightencleaningservices@gmail.com",
  whatsapp: "2348050766253",
  address: "Ilorin, Kwara State, Nigeria",
  instagram: "dhieghtencleaning_services",
  facebook: "dhieghtencleaning_services",
  yearFounded: 2022,
  url: "https://dhlaundryservices.com",
};

export function getYearsOperating(): number {
  return new Date().getFullYear() - SITE_CONFIG.yearFounded;
}
