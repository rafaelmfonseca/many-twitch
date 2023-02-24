export function extractHashInfo(): [ string, string ] {
    const { hash } = window.location;
    const [ routePath, routeParams ] = hash.substring(1).split('?');
    return [ routePath, routeParams ];
}

export function extractRoutesPathFromHash(): string[] {
    const [ routePath ] = extractHashInfo();
    const routes = routePath.split('/').filter(route => route !== undefined && route.trim().length > 0);
    return routes;
}

export function extractRoutesParamFromHash(): [ string, string ][] {
    const [ , paramsPath ] = extractHashInfo();
    const params = new URLSearchParams(paramsPath);
    return Array.from(params);
}

export function replaceRoutesInHash(routes: string[]): string {
    const [ , paramsPath ] = extractHashInfo();
    const { origin } = new URL(window.location.href);

    return origin + '/#' + routes.join('/') + (paramsPath.length > 0 ? '?' + paramsPath : '');
}
