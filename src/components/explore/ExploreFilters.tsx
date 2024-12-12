import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ExploreFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  metricFilter: string;
  setMetricFilter: (metric: string) => void;
  selectedFaculties: string[];
  setSelectedFaculties: (faculties: string[]) => void;
  faculties: string[];
}

const ExploreFilters = ({
  searchQuery,
  setSearchQuery,
  metricFilter,
  setMetricFilter,
  selectedFaculties,
  setSelectedFaculties,
  faculties,
}: ExploreFiltersProps) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name, institution, or research interest..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Select
          value={metricFilter}
          onValueChange={setMetricFilter}
        >
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Sort by metric" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="citations">Citations</SelectItem>
            <SelectItem value="hIndex">h-index</SelectItem>
            <SelectItem value="i10Index">i10-index</SelectItem>
          </SelectContent>
        </Select>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4 border rounded-lg flex-grow">
          {faculties.map((faculty) => (
            <div key={faculty} className="flex items-center space-x-2">
              <Checkbox
                id={faculty}
                checked={selectedFaculties.includes(faculty)}
                onCheckedChange={(checked) => {
                  setSelectedFaculties(prev =>
                    checked
                      ? [...prev, faculty]
                      : prev.filter(f => f !== faculty)
                  );
                }}
              />
              <Label htmlFor={faculty} className="text-sm">{faculty}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreFilters;