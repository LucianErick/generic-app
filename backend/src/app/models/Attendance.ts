import { v4 as uuid } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";

import { Service } from "./Service";
import { User } from "./User";

@Entity("attendances")
class Attendance {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;
  
  @OneToOne(() => Service)
  @JoinColumn({ name: "service_id" })
  service: Service;

  @Column()
  service_id: string;
  
  @Column({ type: "timestamp" })
  start: Date;
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Attendance };
