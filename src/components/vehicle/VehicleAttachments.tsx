
import { X, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/custom-button";

interface VehicleAttachmentsProps {
  attachments: string[];
  onClose: () => void;
  onContactClick: () => void;
}

const VehicleAttachments = ({ attachments, onClose, onContactClick }: VehicleAttachmentsProps) => {
  const apiBaseUrl = "https://admin.bpraceloc.com/storage";
  
  if (!attachments || attachments.length === 0) {
    return (
      <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Fiches Techniques</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-7 w-7">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-sm text-muted-foreground mb-3">
          Fiche technique non disponible, contacter le vendeur pour plus d'informations.
        </div>
        <CustomButton 
          variant="secondary" 
          size="sm" 
          className="w-full"
          onClick={onContactClick}
        >
          Contacter le vendeur
        </CustomButton>
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium">Fiches Techniques</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-7 w-7">
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-2">
        {attachments.map((attachment, index) => {
          const fileName = attachment.split('/').pop() || `Document-${index + 1}.pdf`;
          const displayName = fileName.length > 20 
            ? fileName.substring(0, 17) + '...' 
            : fileName;
            
          return (
            <a 
              key={index}
              href={`${apiBaseUrl}/${attachment}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 rounded-md hover:bg-secondary/30 transition-colors"
              download={fileName}
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm">{displayName}</span>
              </div>
              <Download className="h-4 w-4 text-muted-foreground" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default VehicleAttachments;
