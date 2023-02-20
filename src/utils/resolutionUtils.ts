export function calculateHeightWithTwitchAspectRatio(width: number) {
    const aspectRatio = 9 / 16;
    const height = width * aspectRatio;
    return height;
}
