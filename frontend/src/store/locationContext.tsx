import { createContext, useEffect, useState } from "react";
import { getSpaceData } from "../../lib/strapiQuery";

interface LocationContextType {
  filteredSpaces: any[];
  isLoading: boolean;
  onSearchInputChange: (searchTerm: string) => void;
  onSortChange: (type: string) => void;
  onSpaceCategoryChange: (type: string) => void;
  onPriceChange: (range: number[] | null) => void;
  sort: string;
  searchTerm: string;
  spaceCategory: string;
  priceRange: number[];
  originalSpaces: any[];
}

export const locationContext = createContext<LocationContextType>({
  filteredSpaces: [],
  isLoading: false,
  onSearchInputChange: () => { },
  onSortChange: () => { },
  onSpaceCategoryChange: () => { },
  onPriceChange: () => { },
  sort: "",
  searchTerm: "",
  spaceCategory: "",
  priceRange: [],
  originalSpaces: []
});

export const LocationContextProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [originalSpaces, setOriginalSpaces] = useState<any[]>([]);
  const [filteredSpaces, setFilteredSpaces] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [spaceCategory, setSpaceCategory] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]); // default range

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const spaceData = await getSpaceData();
        if (!spaceData) {
          throw new Error(`HTTP error! Status: failed to fetch spaceData`);
        }
        setOriginalSpaces(spaceData.data);
        setFilteredSpaces(spaceData.data);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = originalSpaces;

    filtered = filtered.filter((loc: any) => {
      if (searchTerm.trim().length === 0) {
        return true;
      } else {
        return loc.spaceName.toLowerCase().includes(searchTerm.trim().toLowerCase());
      }
    });

    if (sort === "low to high") {
      filtered = filtered.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sort === "high to low") {
      filtered = filtered.sort((a: any, b: any) => parseFloat(b.price) - parseFloat(a.price));
    }

    filtered = filtered.filter((loc: any) => {
      return loc.spaceCategory.toLowerCase().includes(spaceCategory.trim().toLowerCase());
    });

    filtered = filtered.filter((product: any) => {
      const price = parseFloat(product.price);
      // return price >= priceRange[0] && price <= priceRange[1];
      return price <= priceRange[1];
    });

    setFilteredSpaces(filtered);
  }, [searchTerm, sort, spaceCategory, priceRange, originalSpaces]);

  const SearchInputChangeHandler = (term: string) => {
    setSearchTerm(term);
  };

  const SortChangeHandler = (type: string) => {
    setSort(type);
  };

  const SpaceCategoryChangeHandler = (category: string) => {
    setSpaceCategory(category);
  };

  const defaultPriceRange = [0, 1000]; // Default price range
  const PriceChangeHandler = (range: number[] | null = defaultPriceRange) => {
    range === null ? setPriceRange(defaultPriceRange) : setPriceRange(range)
  };


  return (
    <locationContext.Provider
      value={{
        filteredSpaces,
        isLoading,
        onSearchInputChange: SearchInputChangeHandler,
        onSortChange: SortChangeHandler,
        onSpaceCategoryChange: SpaceCategoryChangeHandler,
        onPriceChange: PriceChangeHandler,
        sort,
        searchTerm,
        spaceCategory,
        priceRange,
        originalSpaces
      }}
    >
      {children}
    </locationContext.Provider>
  );
};
