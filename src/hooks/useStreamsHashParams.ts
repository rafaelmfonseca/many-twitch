import { useEffect, useState, Dispatch, SetStateAction, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { extractRoutesPathFromHash, replaceRoutesInHash } from '../utils/urlUtils';
  
export const useStreamsHashParams = (): [ string[], Dispatch<SetStateAction<string[]>> ] => {
    const [ streams, setStreams ] = useState<string[]>([]);
    const { hash } = useLocation();

    useEffect(() => {
        setStreams(extractRoutesPathFromHash());
    }, [ hash ]);

    const setStreamsValue = useCallback((nextInit: SetStateAction<string[]>) => {
        const newStreamsValue = typeof nextInit === 'function' ? nextInit(streams) : nextInit;
        const newUrl = replaceRoutesInHash(newStreamsValue);

        window.location.href = newUrl;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [ streams, setStreamsValue ];
};
