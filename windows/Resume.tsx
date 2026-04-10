"use client"

import { useEffect, useState } from 'react';
import { WindowControls } from '@/components';
import WindowWrapper from '@/hoc/WindowWrapper';
import { Download } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const Resume = () => {
  const [PdfComponents, setPdfComponents] = useState<{
    Document: any;
    Page: any;
  } | null>(null);

  useEffect(() => {
    let isMounted = true;

    import('react-pdf').then((mod) => {
      mod.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
      ).toString();

      if (isMounted) {
        setPdfComponents({
          Document: mod.Document,
          Page: mod.Page,
        });
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!PdfComponents) return null;

  const { Document, Page } = PdfComponents;

  return (
    <>
      <div id='window-header'>
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a href='files/resume.pdf' download className='cursor-pointer' title='Download Resume'>
          <Download />
        </a>
      </div>

      <Document file="files/resume.pdf">
        <Page pageNumber={1} />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, 'resume');
export default ResumeWindow;