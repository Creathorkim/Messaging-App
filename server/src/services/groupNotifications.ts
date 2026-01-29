type NotificationType = {
  id: string;
  createdAt: Date;
  data: any;
  userId: string;
  read: boolean | null;
  type: string;
  message: string;
};

export const GroupNotifications = (notification: NotificationType[]) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const thisWeek = new Date(today);
  thisWeek.setDate(thisWeek.getDate() - thisWeek.getDay());
  thisWeek.setHours(0, 0, 0, 0);

  const thisYear = new Date(today);
  thisYear.setMonth(0);
  thisYear.setDate(1);
  thisYear.setHours(0, 0, 0, 0);

  const grouped: Record<
    "Today" | "ThisWeek" | "ThisYear" | "Older",
    NotificationType[]
  > = {
    Today: [],
    ThisWeek: [],
    ThisYear: [],
    Older: [],
  };

  notification.forEach((n) => {
    if (n.createdAt >= today) {
      grouped.Today.push(n);
    } else if (n.createdAt >= thisWeek) {
      grouped.ThisWeek.push(n);
    } else if (n.createdAt > thisYear) {
      grouped.ThisYear.push(n);
    } else {
      grouped.Older.push(n);
    }
  });

  return grouped;
};
