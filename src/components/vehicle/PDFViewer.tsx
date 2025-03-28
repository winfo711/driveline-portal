
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, X, Loader2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  file: string;
  fileName: string;
  isOpen: boolean;
  onClose: () => void;
}

const PDFViewer = ({ file, fileName, isOpen, onClose }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPageNumber(1);
      setLoading(true);
      setError(false);
    }
  }, [isOpen, file]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError() {
    setError(true);
    setLoading(false);
  }

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return newPageNumber < 1 ? 1 : newPageNumber > (numPages || 1) ? (numPages || 1) : newPageNumber;
    });
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        <div className="p-4 sticky top-0 bg-background z-10 border-b flex justify-between items-center">
          <h2 className="font-medium truncate max-w-[calc(100%-80px)]">{fileName}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-4">
          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="mt-2 text-sm text-muted-foreground">Chargement du document...</p>
            </div>
          )}
          
          {error && (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-destructive font-medium">Erreur lors du chargement du PDF</p>
              <p className="mt-1 text-sm text-muted-foreground mb-4">Le document ne peut pas être affiché</p>
              <Button variant="outline" onClick={onClose}>Fermer</Button>
            </div>
          )}
          
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
            className="flex flex-col items-center"
          >
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="max-w-full"
              scale={1}
            />
          </Document>
        </div>
        
        {!loading && !error && numPages && numPages > 0 && (
          <div className="p-4 border-t bg-background sticky bottom-0 flex justify-between items-center">
            <Button
              onClick={previousPage}
              disabled={pageNumber <= 1}
              variant="outline"
              size="sm"
              className="gap-1"
            >
              <ChevronLeft className="h-4 w-4" /> Précédent
            </Button>
            
            <p className="text-sm">
              Page {pageNumber} sur {numPages}
            </p>
            
            <Button
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              variant="outline"
              size="sm" 
              className="gap-1"
            >
              Suivant <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PDFViewer;
