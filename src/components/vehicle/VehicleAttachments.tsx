
import { useState } from "react";
import { X, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/custom-button";
import PDFViewer from "./PDFViewer";

interface VehicleAttachmentsProps {
  attachments: string[];
  onClose: () => void;
  onContactClick: () => void;
}

const VehicleAttachments = ({ attachments, onClose, onContactClick }: VehicleAttachmentsProps) => {
  const apiBaseUrl = "https://admin.bpraceloc.com/storage";
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; name: string } | null>(null);
  
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

  const handlePdfClick = (attachment: string) => {
    const fileName = attachment.split('/').pop() || `Document.pdf`;
    setSelectedPdf({
      url: `${apiBaseUrl}/${attachment}`,
      name: fileName
    });
  };

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
            <div 
              key={index}
              className="flex items-center justify-between p-2 rounded-md hover:bg-secondary/30 transition-colors"
            >
              <button
                className="flex items-center gap-2 flex-1 text-left"
                onClick={() => handlePdfClick(attachment)}
              >
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm">{displayName}</span>
              </button>
              <a
                href={`${apiBaseUrl}/${attachment}`}
                download={fileName}
                className="p-1 hover:bg-secondary rounded-md"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          );
        })}
      </div>

      {selectedPdf && (
        <PDFViewer
          file={selectedPdf.url}
          fileName={selectedPdf.name}
          isOpen={!!selectedPdf}
          onClose={() => setSelectedPdf(null)}
        />
      )}
    </div>
  );
};

export default VehicleAttachments;
