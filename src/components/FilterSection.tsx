import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  selectedBrands: string[];
  onBrandToggle: (brand: string) => void;
  brands: string[];
}

export const FilterSection = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  selectedBrands,
  onBrandToggle,
  brands
}: FilterSectionProps) => {
  return (
    <div className="space-y-4">
      {/* Search and Sort Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search supplements..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Sort */}
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>

        {/* Mobile Filter Toggle */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="sm:hidden">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Products</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterOptions 
                brands={brands}
                selectedBrands={selectedBrands}
                onBrandToggle={onBrandToggle}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden sm:block">
        <FilterOptions 
          brands={brands}
          selectedBrands={selectedBrands}
          onBrandToggle={onBrandToggle}
        />
      </div>
    </div>
  );
};

const FilterOptions = ({ 
  brands, 
  selectedBrands, 
  onBrandToggle 
}: { 
  brands: string[]; 
  selectedBrands: string[]; 
  onBrandToggle: (brand: string) => void;
}) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <Label className="text-sm font-semibold">Filter by Brand</Label>
      {selectedBrands.length > 0 && (
        <Button
          variant="ghost"
          size="sm"
          className="h-auto p-0 text-xs text-gold hover:text-gold-light"
          onClick={() => selectedBrands.forEach(onBrandToggle)}
        >
          Clear all
        </Button>
      )}
    </div>
    <div className="flex flex-wrap gap-2">
      {brands.map((brand) => (
        <div key={brand} className="flex items-center space-x-2">
          <Checkbox
            id={brand}
            checked={selectedBrands.includes(brand)}
            onCheckedChange={() => onBrandToggle(brand)}
            className="border-gold data-[state=checked]:bg-gold data-[state=checked]:border-gold"
          />
          <label
            htmlFor={brand}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            {brand}
          </label>
        </div>
      ))}
    </div>
  </div>
);
