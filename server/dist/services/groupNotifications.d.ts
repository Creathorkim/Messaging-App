type NotificationType = {
    id: string;
    createdAt: Date;
    data: any;
    userId: string;
    read: boolean | null;
    type: string;
    message: string;
};
export declare const GroupNotifications: (notification: NotificationType[]) => Record<"Today" | "ThisWeek" | "ThisYear" | "Older", NotificationType[]>;
export {};
//# sourceMappingURL=groupNotifications.d.ts.map