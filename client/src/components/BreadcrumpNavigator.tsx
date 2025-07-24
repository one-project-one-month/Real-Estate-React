import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbPath {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbNavigatorProps {
  paths: BreadcrumbPath[];
}

export const BreadcrumbNavigator: React.FC<BreadcrumbNavigatorProps> = ({
  paths,
}) => {
  return (
    <nav className="flex w-full text-sm text-gray-700" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {paths.map((path, index) => {
          const isFirst = index === 0;
          const isLast = index === paths.length - 1;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              )}

              {path.href && !path.isCurrent ? (
                <a
                  href={path.href}
                  className="inline-flex items-center text-gray-700 hover:text-secondary-foreground"
                >
                  {isFirst ? (
                    <>
                      <Home className="w-4 h-4 mr-2" />
                      {path.label}
                    </>
                  ) : (
                    <span className="ml-1">{path.label}</span>
                  )}
                </a>
              ) : (
                <span className="ml-1 text-gray-400">{path.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
